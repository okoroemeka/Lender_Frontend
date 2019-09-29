// code idea from HOF
const createActionType = (type, entity = 'Index') => ({
  START: `@@[${entity}] ${type}_START`,
  SUCCESS: `@@[${entity}] ${type}_SUCCESS`,
  STATUS: `@@[${entity}] ${type}_STATUS`,
  ERROR: `@@[${entity}] ${type}_ERROR`,
  END: `@@[${entity}] ${type}_END`,
});
export default createActionType;
