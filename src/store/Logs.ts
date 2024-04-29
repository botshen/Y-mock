import { defineProxyService, flattenPromise } from '@webext-core/proxy-service';
import { IDBPDatabase } from 'idb';

function createLogsRepo(idbPromise: Promise<IDBPDatabase>) {
  const idb = flattenPromise(idbPromise);

  return {
    async create(log: Log): Promise<void> {
      await idb.add('logs', log)
    },
    getOne(timestamp: number): Promise<Log | undefined> {
      return idb.get('logs', timestamp);
    },
    getAll(): Promise<Log[]> {
      return idb.getAll('logs');
    },
    async update(log: Log): Promise<void> {
      await idb.put('logs', log);
    },
    async delete(log: Log): Promise<void> {
      await idb.delete('logs', log.timestamp);
    },
  };
}
export const [registerLogsRepo, getLogsRepo] = defineProxyService('LogsRepo', createLogsRepo);

