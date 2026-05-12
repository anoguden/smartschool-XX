/**
 * background.js — Service Worker
 * Beheert alarms voor de kookwekker/timer en stuurt notificaties.
 */

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'smsc-timer') {
    chrome.notifications.create('smsc-timer-done', {
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: '⏰ Timer klaar!',
      message: 'Jouw Smartschool Suite timer is afgelopen.',
      priority: 2,
    });
  }
});
