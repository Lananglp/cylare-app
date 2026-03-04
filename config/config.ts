const appName = process.env.NEXT_PUBLIC_APP_NAME;
const adminPhone = "6285737578780";
const message = `Halo *${appName}*, saya memiliki rencana untuk membuat sebuah website`;
const encodedMessage = encodeURIComponent(message);
export const textToWhatsapp = `https://wa.me/${adminPhone}?text=${encodedMessage}`;
export const DPPercentage = "40%";
export const percentageAfterDP = "60%";