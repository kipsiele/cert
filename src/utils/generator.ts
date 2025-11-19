export const generateCertificateId = () => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `CRISP-${new Date().getFullYear()}-${random}`;
};

export const generateIssuedDate = () => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
