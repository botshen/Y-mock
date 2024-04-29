import { registerLogsRepo } from '@/store/Logs';
import { registerRuleRepo } from '@/store/RulesRepo';
import { openDB } from 'idb';

export default defineBackground(() => {
  const db = openDB("myDatabase", 1, {
    upgrade(db) {
      db.createObjectStore('rules', { keyPath: 'pathRule' });
      db.createObjectStore('logs', { keyPath: 'timestamp' });
    },
  });

  registerRuleRepo(db);
  registerLogsRepo(db)
});
