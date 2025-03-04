export const capFirstChar = (str) => (str[0].toUpperCase() + str.slice(1))
import { useColorScheme } from 'react-native';

export const useThemeColors = () => {
  const theme = 'light' // 'light' or 'dark'

  return {
    color0: "#111",
    color1: theme === 'dark' ? "#1E1E1E" : "rgb(255, 255, 255)",
    color2: theme === 'dark' ? "white" : "rgb(53, 53, 53)",
    color3: theme === 'dark' ? "#333" : "rgb(221, 221, 221)",
    color4: theme === 'dark' ? "#999" : "rgb(208, 208, 208)",
    color5: theme === 'dark' ? "#2c2c2c" : "rgb(255, 255, 255)",
    scndBGColor: theme === 'dark' ? "#2c2c2c" : "white",
    colorW0: theme === 'dark' ? "#2c2c2c" : "rgb(238, 238, 238)",
    textColor: theme === 'dark' ? "white" : "#111",
    shadowColor: theme === 'dark' ? "rgba(0, 0, 0, 0)" : "rgb(177, 177, 177)",
    shadowColor1: theme === 'dark' ? "rgba(0, 0, 0, 0)" : "rgb(210, 210, 210)",
  };
};

//DARK MODE
// export const color0 = "#111"
// export const color1 = "#1E1E1E"
// export const color2 = "white"
// export const color3 = "#333" 
// export const color4 = "#999"
// export const color5 = "#2c2c2c"
// export const scndBGColor = "#2c2c2c"
// export const colorW0 = "#2c2c2c"
// export const textColor = "white"
// export const shadowColor = "rgba(177, 177, 177, 0)"
// export const shadowColor1 = "rgba(210, 210, 210, 0)"

export const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000);
  
    if (diff < 60) return `il y a ${diff} seconde${diff > 1 ? 's' : ''}`;
    const minutes = Math.floor(diff / 60);
    if (minutes < 60) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    const months = Math.floor(days / 30);
    if (months < 12) return `il y a ${months} mois`;
    const years = Math.floor(months / 12);
    return `il y a ${years} an${years > 1 ? 's' : ''}`;
}
  