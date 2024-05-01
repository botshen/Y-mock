import { defineProxyService, flattenPromise } from '@webext-core/proxy-service';
import { IDBPDatabase } from 'idb';

function createRulesRepo(idbPromise: Promise<IDBPDatabase>) {
  const idb = flattenPromise(idbPromise);

  return {
    async create(rule: Rule): Promise<void> {
      await idb.add('rules', rule)
    },
    getOne(timestamp: number): Promise<Rule | undefined> {
      return idb.get('rules', timestamp);
    },
    getAll(): Promise<Rule[]> {
      return idb.getAll('rules');
    },
    async update(rule: Rule): Promise<void> {
      await idb.put('rules', rule);
    },
    async delete(timestamp: number): Promise<void> {
      await idb.delete('rules', timestamp);
    },
  };
}
export const [registerRuleRepo, getRuleRepo] = defineProxyService('RuleRepo', createRulesRepo);

