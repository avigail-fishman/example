
export const createCandyStyle = (candy) => {
    return {
      backgroundColor: candy.color,
      width: candy.size + "px",
      height: candy.size + "px",
      borderRadius: "50%"
    }
  }