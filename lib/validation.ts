export type LeadFormValues = {
  fullName: string;
  mobile: string;
  customerType: "Residential" | "Commercial" | "Industrial" | "";
  location: "Roorkee" | "Haridwar" | "Bhagwanpur" | "Other" | "";
  monthlyBill: string;
  message: string;
  consent: boolean;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

export function validateIndianMobile(value: string): boolean {
  return /^[6-9]\d{9}$/.test(value.trim());
}

export function validateLeadForm(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!validateIndianMobile(values.mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.customerType) {
    errors.customerType = "Please select a customer type.";
  }

  if (!values.location) {
    errors.location = "Please select your location.";
  }

  if (!values.consent) {
    errors.consent = "Please provide consent before submitting your enquiry.";
  }

  return errors;
}
