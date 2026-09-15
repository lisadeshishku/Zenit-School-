import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import AdminVacancies from './AdminVacancies';
import '../styles/Admin.css';

const emptyForm = {
  title_sq: '',
  title_en: '',
  summary_sq: '',
  summary_en: '',
  content_sq: '',
  content_en: '',
  cover_image_url: '',
};

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/ë/g, 'e')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const AdminDashboard = ({ session, onLogout }) => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [editingNews, setEditingNews] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const loadNews = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setMessage(`Gabim gjatë ngarkimit: ${error.message}`);
    } else {
      setNews(data || []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const uploadImage = async () => {
    if (!imageFile) {
      return form.cover_image_url || null;
    }

    const extension = imageFile.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${extension}`;

    const { error } = await supabase.storage
      .from('news-images')
      .upload(filename, imageFile, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from('news-images')
      .getPublicUrl(filename);

    return data.publicUrl;
  };

  const saveNews = async (published) => {
    if (!form.title_sq.trim() || !form.content_sq.trim()) {
      setMessage('Titulli dhe përmbajtja në shqip janë të detyrueshme.');
      return;
    }

    setSaving(true);
    setMessage('');

    try {
      const imageUrl = await uploadImage();

      const baseSlug =
        createSlug(form.title_sq) || `lajm-${Date.now()}`;

      const newsData = {
        title_sq: form.title_sq.trim(),
        title_en: form.title_en.trim() || null,
        summary_sq: form.summary_sq.trim() || null,
        summary_en: form.summary_en.trim() || null,
        content_sq: form.content_sq.trim(),
        content_en: form.content_en.trim() || null,
        cover_image_url: imageUrl,
        published,
        published_at: published
          ? editingNews?.published_at || new Date().toISOString()
          : null,
      };

      let error;

      if (editingNews) {
        const result = await supabase
          .from('news')
          .update(newsData)
          .eq('id', editingNews.id);

        error = result.error;
      } else {
        const result = await supabase.from('news').insert({
          ...newsData,
          slug: `${baseSlug}-${Date.now()}`,
          created_by: session.user.id,
        });

        error = result.error;
      }

      if (error) {
        throw error;
      }

      setMessage(
        published
          ? 'Lajmi u publikua me sukses.'
          : 'Lajmi u ruajt si draft.'
      );

      closeForm();
      await loadNews();
    } catch (error) {
      setMessage(`Gabim: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const editNews = (item) => {
    setEditingNews(item);

    setForm({
      title_sq: item.title_sq || '',
      title_en: item.title_en || '',
      summary_sq: item.summary_sq || '',
      summary_en: item.summary_en || '',
      content_sq: item.content_sq || '',
      content_en: item.content_en || '',
      cover_image_url: item.cover_image_url || '',
    });

    setImageFile(null);
    setMessage('');
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const deleteNews = async (item) => {
    const confirmed = window.confirm(
      `A jeni të sigurt që dëshironi ta fshini lajmin “${item.title_sq}”?`
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', item.id);

    if (error) {
      setMessage(`Gabim gjatë fshirjes: ${error.message}`);
      return;
    }

    setMessage('Lajmi u fshi me sukses.');
    await loadNews();
  };

  const closeForm = () => {
    setForm(emptyForm);
    setImageFile(null);
    setEditingNews(null);
    setShowForm(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <p className="admin-dashboard-label">Zenit School</p>
          <h1>Menaxhimi i përmbajtjes</h1>
          <p>{session.user.email}</p>
        </div>

        <button
          type="button"
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Dil
        </button>
      </header>

      <section className="admin-dashboard-content">
        <div>
          <h2>Lajmet dhe njoftimet</h2>
          <p>Shtoni, ndryshoni dhe publikoni lajmet e shkollës.</p>
        </div>

        <button
          type="button"
          className="admin-new-button"
          onClick={() => {
            if (showForm) {
              closeForm();
            } else {
              setMessage('');
              setShowForm(true);
            }
          }}
        >
          {showForm ? 'Mbyll formularin' : '+ Shto lajm'}
        </button>
      </section>

      {message && (
        <div className="admin-notification">
          {message}
        </div>
      )}

      {showForm && (
        <section className="admin-news-form">
          <div className="admin-form-heading">
            <h2>
              {editingNews ? 'Ndrysho lajmin' : 'Shto lajm të ri'}
            </h2>

            <p>
              Fushat në gjuhën shqipe janë të detyrueshme.
            </p>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-column">
              <h3>Shqip</h3>

              <label htmlFor="title_sq">Titulli *</label>
              <input
                id="title_sq"
                name="title_sq"
                value={form.title_sq}
                onChange={handleChange}
                required
              />

              <label htmlFor="summary_sq">Përmbledhja</label>
              <textarea
                id="summary_sq"
                name="summary_sq"
                value={form.summary_sq}
                onChange={handleChange}
                rows="3"
              />

              <label htmlFor="content_sq">Përmbajtja *</label>
              <textarea
                id="content_sq"
                name="content_sq"
                value={form.content_sq}
                onChange={handleChange}
                rows="10"
                required
              />
            </div>

            <div className="admin-form-column">
              <h3>English</h3>

              <label htmlFor="title_en">Title</label>
              <input
                id="title_en"
                name="title_en"
                value={form.title_en}
                onChange={handleChange}
              />

              <label htmlFor="summary_en">Summary</label>
              <textarea
                id="summary_en"
                name="summary_en"
                value={form.summary_en}
                onChange={handleChange}
                rows="3"
              />

              <label htmlFor="content_en">Content</label>
              <textarea
                id="content_en"
                name="content_en"
                value={form.content_en}
                onChange={handleChange}
                rows="10"
              />
            </div>
          </div>

          <div className="admin-image-field">
            <label htmlFor="news-image">Fotografia kryesore</label>

            <input
              id="news-image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => {
                setImageFile(event.target.files?.[0] || null);
              }}
            />

            {form.cover_image_url && !imageFile && (
              <img
                src={form.cover_image_url}
                alt="Fotografia aktuale"
                className="admin-image-preview"
              />
            )}

            {imageFile && (
              <p className="admin-selected-file">
                Fotografia: {imageFile.name}
              </p>
            )}
          </div>

          <div className="admin-form-actions">
            <button
              type="button"
              className="admin-cancel-button"
              onClick={closeForm}
              disabled={saving}
            >
              Anulo
            </button>

            <button
              type="button"
              className="admin-draft-button"
              onClick={() => saveNews(false)}
              disabled={saving}
            >
              Ruaj si draft
            </button>

            <button
              type="button"
              className="admin-publish-button"
              onClick={() => saveNews(true)}
              disabled={saving}
            >
              {saving ? 'Duke ruajtur...' : 'Publiko'}
            </button>
          </div>
        </section>
      )}

      <section className="admin-news-list">
        <h2>Lajmet</h2>

        {loading && <p>Duke i ngarkuar lajmet...</p>}

        {!loading && news.length === 0 && (
          <div className="admin-empty-state">
            <p>Ende nuk është shtuar asnjë lajm.</p>
          </div>
        )}

        {!loading &&
          news.map((item) => (
            <article className="admin-news-item" key={item.id}>
              {item.cover_image_url && (
                <img
                  src={item.cover_image_url}
                  alt=""
                  className="admin-news-thumbnail"
                />
              )}

              <div className="admin-news-information">
                <div className="admin-news-title-row">
                  <h3>{item.title_sq}</h3>

                  <span
                    className={
                      item.published
                        ? 'admin-status published'
                        : 'admin-status draft'
                    }
                  >
                    {item.published ? 'Publikuar' : 'Draft'}
                  </span>
                </div>

                <p>
                  {item.summary_sq ||
                    'Nuk është shtuar përmbledhje.'}
                </p>

                <small>
                  {new Date(item.created_at).toLocaleDateString(
                    'sq-AL'
                  )}
                </small>
              </div>

              <div className="admin-news-actions">
                <button
                  type="button"
                  onClick={() => editNews(item)}
                >
                  Ndrysho
                </button>

                <button
                  type="button"
                  className="admin-delete-button"
                  onClick={() => deleteNews(item)}
                >
                  Fshi
                </button>
              </div>
            </article>
          ))}
      </section>
      <AdminVacancies session={session} />
    </main>
  );
};

export default AdminDashboard;