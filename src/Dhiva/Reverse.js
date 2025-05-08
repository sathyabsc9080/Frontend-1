const str = "Dhiva";

const reverseString = () => {
    const split = str.split('');
    const reverse = split.reverse();
    const join = reverse.join('');
    return join;
};

console.log(reverseString());
