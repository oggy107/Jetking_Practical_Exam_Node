const compare = (s1, s2) => {
    return s1 == s2;
}

const main = () => {
    console.log("comparing 'hello' and 'world':", compare("hello", "world"));
    console.log("comparing 'brother' and 'brother':", compare("brother", "brother"));
}

main()