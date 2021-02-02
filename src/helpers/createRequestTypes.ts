const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

const createRequestTypes = (base: any, operations: any) =>
  operations.reduce((acc: any, op: any) => {
    acc[op] = [REQUEST, SUCCESS, FAILURE].reduce(
      (subacc, type) => ({
        ...subacc,
        [type]: `${base}_${op}_${type}`,
      }),
      {}
    );
    return acc;
  }, {});

export default createRequestTypes;
