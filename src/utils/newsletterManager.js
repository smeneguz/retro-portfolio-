// Newsletter Subscriber Management
// This stores subscribers in browser localStorage until EmailJS is configured

export const addSubscriber = (email) => {
  const subscribers = getSubscribers();
  const newSubscriber = {
    email,
    date: new Date().toISOString(),
    id: Date.now()
  };
  subscribers.push(newSubscriber);
  localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

  // Log to console so site owner can see
  console.log('📬 New newsletter subscriber:', email);
  console.log('📋 Total subscribers:', subscribers.length);

  return newSubscriber;
};

export const getSubscribers = () => {
  const stored = localStorage.getItem('newsletter_subscribers');
  return stored ? JSON.parse(stored) : [];
};

export const exportSubscribers = () => {
  const subscribers = getSubscribers();
  const csv = 'Email,Date\n' + subscribers.map(s => `${s.email},${s.date}`).join('\n');

  // Create download
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);

  return subscribers;
};

export const clearSubscribers = () => {
  localStorage.removeItem('newsletter_subscribers');
  console.log('📭 Newsletter subscribers cleared');
};

// Add to window for easy access from console
if (typeof window !== 'undefined') {
  window.newsletterManager = {
    getSubscribers,
    exportSubscribers,
    clearSubscribers
  };
  console.log('💡 Newsletter manager available: Use newsletterManager.getSubscribers() in console to see subscribers');
}
