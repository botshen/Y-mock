import { registerLogsRepo } from '@/store/LogsRepo';
import { registerRuleRepo } from '@/store/RulesRepo';
import { openDB } from 'idb';

export default defineBackground(() => {
  const db = openDB("mockDB", 1, {
    upgrade(db) {
      db.createObjectStore('rules', { keyPath: 'timestamp' });
      db.createObjectStore('logs', { keyPath: 'timestamp' });
    },
  });

  registerRuleRepo(db);
  registerLogsRepo(db)
});
