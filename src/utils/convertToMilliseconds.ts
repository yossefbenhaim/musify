const convertToseconds = (minute: number, second: number): number => {
    const totalSeconds = minute * 60 + second;
    return totalSeconds;
};

export default convertToseconds;
