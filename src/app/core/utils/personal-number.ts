export function calculateAgeFromBirthDate(birthDate: Date, today = new Date()): number | null {
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  const age = today.getFullYear() - birthDate.getFullYear() - (hasHadBirthday ? 0 : 1);

  return age >= 0 ? age : null;
}

export function parseBirthDateFromPersonalNumber(
  personalNumber: string,
  today = new Date(),
): Date | null {
  const birthDatePart = personalNumber.trim().slice(0, 6);

  if (!/^\d{6}$/.test(birthDatePart)) {
    return null;
  }

  const day = Number(birthDatePart.slice(0, 2));
  const month = Number(birthDatePart.slice(2, 4));
  const shortYear = Number(birthDatePart.slice(4, 6));
  const currentYear = today.getFullYear() % 100;
  const year = shortYear <= currentYear ? 2000 + shortYear : 1900 + shortYear;
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    return null;
  }

  return birthDate;
}

export function calculateAgeFromPersonalNumber(
  personalNumber: string,
  today = new Date(),
): number | null {
  const birthDate = parseBirthDateFromPersonalNumber(personalNumber, today);

  if (!birthDate) {
    return null;
  }

  return calculateAgeFromBirthDate(birthDate, today);
}