enum Membership {
  Simple,
  Standart,
  Premium,
}

const membershipStand = Membership.Standart;
//standart
const membershipPrem = Membership[2];
//premium


enum SocialMedia {
  VK = "VK",
  FB = "FB",
  INSTA = 'INST',
}
// Компилируется в функцию, можно использовать функции copmuted

const socialInsta = SocialMedia.INSTA;
//insta

// Константные enum - компилирует все места где используются Roles в константы
const enum Roles {
  ADMIN = 1,
  USER = 2
}