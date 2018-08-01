export const required = (value) => value ? undefined : 'Required';
export const nonEmpty = (value) => (
  value.trim() !== '' ? undefined : 'Must not be empty'
);
export const length = (value) => (
  value.length === 5 ? undefined : 'Must contain exactly 5 characters'
);
export const onlyNumbers = (value) => (
  /^[0-9]+$/.test(value) ? undefined : 'Must only contain numbers'
);
