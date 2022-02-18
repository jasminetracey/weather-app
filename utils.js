export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
