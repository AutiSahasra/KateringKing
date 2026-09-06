import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Crown, Calendar, Users, MapPin, Sparkles, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';
import { openWhatsApp, generateWhatsAppUrl } from '../../utils/whatsapp';
import { cateringPackages } from '../../data/mockData';

export default function EnquiryModal({ isOpen, onClose, preselectedPackage }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      packageName: preselectedPackage?.name || 'Royal Gold Banquet',
      eventType: 'Wedding / Reception',
      eventDate: '',
      guests: '200',
      location: 'Hyderabad / Regional',
      notes: ''
    }
  });

  // Keep package updated when preselectedPackage changes
  useEffect(() => {
    if (preselectedPackage?.name) {
      setValue('packageName', preselectedPackage.name);
    }
  }, [preselectedPackage, setValue]);

  // Lock body scroll on modal open & listen for Escape
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Watch form values for live WhatsApp message preview
  const watchedValues = watch();

  const onSubmit = (data) => {
    // 1. Trigger festive celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C88A2E', '#EED7B0', '#111418']
      });
    } catch (e) {
      // safe fallback if canvas is disabled
    }

    setShowSuccess(true);

    // 2. Open WhatsApp after a brief delay so user sees confirmation
    setTimeout(() => {
      openWhatsApp(data);
      setTimeout(() => {
        setShowSuccess(false);
        reset();
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10, 12, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-surface-card)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-modal)',
          border: '1.5px solid rgba(200, 138, 46, 0.35)',
          padding: 'clamp(24px, 4vw, 40px)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close enquiry modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-surface-elevated)',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-border-subtle)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {showSuccess ? (
          <div style={{ textAlign: 'center', padding: '48px 16px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(200, 138, 46, 0.15)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 8px 24px rgba(200, 138, 46, 0.3)'
              }}
            >
              <Sparkles size={36} />
            </div>
            <h3 style={{ fontSize: '28px', color: 'var(--color-secondary)', marginBottom: '12px' }}>
              Redirecting to WhatsApp Concierge...
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '440px', margin: '0 auto' }}>
              Your royal enquiry has been prepared. Opening WhatsApp with your event specifications.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Crown size={18} color="var(--color-primary)" />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)' }}>
                  White-Glove Hospitality Concierge
                </span>
              </div>
              <h2 id="enquiry-modal-title" style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--color-secondary)' }}>
                Request Bespoke Catering Quote
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                Fill in your celebration details below. We instantly prepare a formal quote for your selected package on WhatsApp.
              </p>
            </div>

            {/* Form & Live Message Preview Split */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px'
                }}
              >
                {/* Field 1: Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maharani Gayatri / Raghav Singhania"
                    {...register('name', { required: 'Please enter your full name' })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.name ? '1.5px solid var(--color-status-error)' : '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: 'var(--color-status-error)', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Field 2: Phone Number */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    {...register('phone', {
                      required: 'Phone number is required',
                      minLength: { value: 8, message: 'Please enter a valid phone number' }
                    })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1.5px solid var(--color-status-error)' : '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  {errors.phone && (
                    <span style={{ color: 'var(--color-status-error)', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Field 3: Package Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Selected Catering Package
                  </label>
                  <select
                    {...register('packageName')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    {cateringPackages.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.price} / {p.unit})
                      </option>
                    ))}
                    <option value="Completely Bespoke Custom Menu">Completely Bespoke Custom Menu</option>
                  </select>
                </div>

                {/* Field 4: Event Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Occasion / Event Type
                  </label>
                  <select
                    {...register('eventType')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="Grand Royal Wedding">Grand Royal Wedding</option>
                    <option value="Wedding Reception / Sangeet">Wedding Reception / Sangeet</option>
                    <option value="Executive Corporate Gala / Summit">Executive Corporate Gala / Summit</option>
                    <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                    <option value="Private Estate Soirée">Private Estate Soirée</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>

                {/* Field 5: Event Date */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    {...register('eventDate')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Field 6: Number of Guests */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Estimated Guest Count
                  </label>
                  <select
                    {...register('guests')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-neutral-canvas)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="50 - 100 Guests">50 - 100 Guests</option>
                    <option value="100 - 250 Guests">100 - 250 Guests</option>
                    <option value="250 - 500 Guests">250 - 500 Guests</option>
                    <option value="500 - 1,000 Guests">500 - 1,000 Guests</option>
                    <option value="1,000+ Royal Dignitaries">1,000+ Royal Dignitaries</option>
                  </select>
                </div>
              </div>

              {/* Field 7: Venue Location */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Event Venue / City Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Taj Falaknuma Palace / Hyderabad / Goa / Bengaluru"
                  {...register('location')}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-neutral-canvas)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Field 8: Special Requirements */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Culinary Preferences or Special Dietary Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Require authentic Awadhi dum counters, separate pure-vegetarian Jain live kitchen, and French pastry bar..."
                  {...register('notes')}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-neutral-canvas)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Live Preview Accordion Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  border: '1px dashed rgba(200, 138, 46, 0.4)',
                  marginBottom: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MessageCircle size={16} color="#25D366" />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                    Live WhatsApp Dispatch Preview
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.5, fontFamily: 'monospace' }}>
                  👑 *NEW CATERING ENQUIRY — KateringKing*<br />
                  • Package: {watchedValues.packageName}<br />
                  • Occasion: {watchedValues.eventType} | Guests: {watchedValues.guests}<br />
                  • Date: {watchedValues.eventDate || 'TBD'} | Venue: {watchedValues.location}
                </div>
              </div>

              {/* Form Actions */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-secondary"
                  style={{ padding: '12px 24px' }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: '14px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
