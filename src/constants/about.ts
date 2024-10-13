export const NAME = "Yanko Dmytro";
const INITIALS = NAME.split(" ")
  .map((word) => word[0])
  .join("");

export const avatarImage =
  "https://media.licdn.com/dms/image/v2/D4D03AQHsi9BsEpoecA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694768980167?e=1734566400&v=beta&t=7AV561ddRdFXBvfQS6zWK83Lz3JZMArNRHYlT4c4sfk";

export const about = {
  name: NAME,
  initials: INITIALS,
  position: "Frontend Developer",
  slogan:
    "I develop accessible, engaging, and pixel-perfect digital products for the web.",
};
