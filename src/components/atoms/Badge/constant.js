const variantOptions = {
  paid: "bg-success-10 text-success-90",
  cancel: "bg-danger-10 text-danger-90",
  unpaid: "bg-secondary-10 text-secondary-90",
};

export const getVariant = (variant) => variantOptions[variant];
