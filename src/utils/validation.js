export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

export const validateSpidrPin = (pin) => {
  const pinRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return pinRegex.test(pin);
};
