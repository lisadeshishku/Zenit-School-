import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const emptyForm = {
  title_sq: '',
  title_en: '',
  description_sq: '',
  description_en: '',
  requirements_sq: '',
  requirements_en: '',
  location: '',
  employment_type_sq: '',
  employment_type_en: '',
  application_email: '',
  deadline: '',
};

export default function AdminVacancies({ session }) {
  const [vacancies, setVacancies] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingVacancy, setEditingVacancy] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const loadVacancies = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('vacancies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setMessage(`Gabim gjatë ngarkimit: ${error.message}`);
    } else {
      setVacancies(data || []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadVacancies();
  }, [loadVacancies]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const closeForm = () => {
    setForm(emptyForm);
    setEditingVacancy(null);
    setShowForm(false);
  };

  const toggleForm = () => {
    if (showForm) {
      closeForm();
      return;
    }

    setForm(emptyForm);
    setEditingVacancy(null);
    setMessage('');
    setShowForm(true);
  };

  const saveVacancy = async (published) => {
    if (!form.title_sq.trim() || !form.description_sq.trim()) {
      setMessage(
        'Titulli dhe përshkrimi në shqip janë të detyrueshme.'
      );
      return;
    }

    setSaving(true);
    setMessage('');

    const vacancyData = {
      title_sq: form.title_sq.trim(),
      title_en: form.title_en.trim() || null,
      description_sq: form.description_sq.trim(),
      description_en: form.description_en.trim() || null,
      requirements_sq: form.requirements_sq.trim() || null,
      requirements_en: form.requirements_en.trim() || null,
      location: form.location.trim() || null,
      employment_type_sq:
        form.employment_type_sq.trim() || null,
      employment_type_en:
        form.employment_type_en.trim() || null,
      application_email:
        form.application_email.trim() || null,
      deadline: form.deadline || null,
      published,
      published_at: published
        ? editingVacancy?.published_at ||
          new Date().toISOString()
        : null,
      updated_at: new Date().toISOString(),
    };

    let error;

    if (editingVacancy) {
      const result = await supabase
        .from('vacancies')
        .update(vacancyData)
        .eq('id', editingVacancy.id);

      error = result.error;
    } else {
      const result = await supabase
        .from('vacancies')
        .insert({
          ...vacancyData,
          created_by: session.user.id,
        });

      error = result.error;
    }

    if (error) {
      setMessage(`Gabim: ${error.message}`);
      setSaving(false);
      return;
    }

    setMessage(
      published
        ? 'Vendi i punës u publikua me sukses.'
        : 'Vendi i punës u ruajt si draft.'
    );

    closeForm();
    await loadVacancies();
    setSaving(false);
  };

  const editVacancy = (item) => {
    setEditingVacancy(item);

    setForm({
      title_sq: item.title_sq || '',
      title_en: item.title_en || '',
      description_sq: item.description_sq || '',
      description_en: item.description_en || '',
      requirements_sq: item.requirements_sq || '',
      requirements_en: item.requirements_en || '',
      location: item.location || '',
      employment_type_sq: item.employment_type_sq || '',
      employment_type_en: item.employment_type_en || '',
      application_email: item.application_email || '',
      deadline: item.deadline || '',
    });

    setMessage('');
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const deleteVacancy = async (item) => {
    const confirmed = window.confirm(
      `A jeni të sigurt që dëshironi ta fshini vendin e punës “${item.title_sq}”?`
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from('vacancies')
      .delete()
      .eq('id', item.id);

    if (error) {
      setMessage(`Gabim gjatë fshirjes: ${error.message}`);
      return;
    }

    setMessage('Vendi i punës u fshi me sukses.');
    await loadVacancies();
  };

  return (
    <section className="admin-vacancies">
      <div className="admin-dashboard-content">
        <div>
          <h2>Vendet e punës</h2>
          <p>
            Shtoni, ndryshoni dhe publikoni vende të lira pune.
          </p>
        </div>

        <button
          type="button"
          className="admin-new-button"
          onClick={toggleForm}
        >
          {showForm
            ? 'Mbyll formularin'
            : '+ Shto vend pune'}
        </button>
      </div>

      {message && (
        <div className="admin-notification">
          {message}
        </div>
      )}

      {showForm && (
        <section className="admin-news-form admin-vacancy-form">
          <div className="admin-form-heading">
            <h2>
              {editingVacancy
                ? 'Ndrysho vendin e punës'
                : 'Shto vend të ri pune'}
            </h2>

            <p>
              Titulli dhe përshkrimi në shqip janë të
              detyrueshme.
            </p>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-column">
              <h3>Shqip</h3>

              <label htmlFor="vacancy-title-sq">
                Titulli *
              </label>
              <input
                id="vacancy-title-sq"
                name="title_sq"
                value={form.title_sq}
                onChange={handleChange}
              />

              <label htmlFor="vacancy-description-sq">
                Përshkrimi *
              </label>
              <textarea
                id="vacancy-description-sq"
                name="description_sq"
                value={form.description_sq}
                onChange={handleChange}
                rows="6"
              />

              <label htmlFor="vacancy-requirements-sq">
                Kërkesat
              </label>
              <textarea
                id="vacancy-requirements-sq"
                name="requirements_sq"
                value={form.requirements_sq}
                onChange={handleChange}
                rows="5"
              />

              <label htmlFor="vacancy-type-sq">
                Lloji i punës
              </label>
              <input
                id="vacancy-type-sq"
                name="employment_type_sq"
                value={form.employment_type_sq}
                onChange={handleChange}
                placeholder="P.sh. Orar i plotë"
              />
            </div>

            <div className="admin-form-column">
              <h3>English</h3>

              <label htmlFor="vacancy-title-en">
                Title
              </label>
              <input
                id="vacancy-title-en"
                name="title_en"
                value={form.title_en}
                onChange={handleChange}
              />

              <label htmlFor="vacancy-description-en">
                Description
              </label>
              <textarea
                id="vacancy-description-en"
                name="description_en"
                value={form.description_en}
                onChange={handleChange}
                rows="6"
              />

              <label htmlFor="vacancy-requirements-en">
                Requirements
              </label>
              <textarea
                id="vacancy-requirements-en"
                name="requirements_en"
                value={form.requirements_en}
                onChange={handleChange}
                rows="5"
              />

              <label htmlFor="vacancy-type-en">
                Employment type
              </label>
              <input
                id="vacancy-type-en"
                name="employment_type_en"
                value={form.employment_type_en}
                onChange={handleChange}
                placeholder="For example: Full-time"
              />
            </div>
          </div>

          <div className="admin-vacancy-details">
            <div>
              <label htmlFor="vacancy-location">
                Lokacioni
              </label>
              <input
                id="vacancy-location"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="vacancy-email">
                Email për aplikim
              </label>
              <input
                id="vacancy-email"
                type="email"
                name="application_email"
                value={form.application_email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="vacancy-deadline">
                Afati i aplikimit
              </label>
              <input
                id="vacancy-deadline"
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
              />
            </div>
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
              onClick={() => saveVacancy(false)}
              disabled={saving}
            >
              Ruaj si draft
            </button>

            <button
              type="button"
              className="admin-publish-button"
              onClick={() => saveVacancy(true)}
              disabled={saving}
            >
              {saving ? 'Duke ruajtur...' : 'Publiko'}
            </button>
          </div>
        </section>
      )}

      <section className="admin-news-list admin-vacancy-list">
        <h2>Vendet e punës</h2>

        {loading && (
          <p>Duke i ngarkuar vendet e punës...</p>
        )}

        {!loading && vacancies.length === 0 && (
          <div className="admin-empty-state">
            <p>Nuk ka ende vende pune të shtuara.</p>
          </div>
        )}

        {!loading &&
          vacancies.map((item) => (
            <article
              className="admin-news-item admin-vacancy-item"
              key={item.id}
            >
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
                    {item.published
                      ? 'Publikuar'
                      : 'Draft'}
                  </span>
                </div>

                <p>
                  {[
                    item.location,
                    item.employment_type_sq,
                  ]
                    .filter(Boolean)
                    .join(' • ') || 'Pa detaje shtesë'}
                </p>

                {item.deadline && (
                  <small>
                    Afati:{' '}
                    {new Date(
                      `${item.deadline}T00:00:00`
                    ).toLocaleDateString('sq-AL')}
                  </small>
                )}
              </div>

              <div className="admin-news-actions">
                <button
                  type="button"
                  onClick={() => editVacancy(item)}
                >
                  Ndrysho
                </button>

                <button
                  type="button"
                  className="admin-delete-button"
                  onClick={() => deleteVacancy(item)}
                >
                  Fshi
                </button>
              </div>
            </article>
          ))}
      </section>
    </section>
  );
}