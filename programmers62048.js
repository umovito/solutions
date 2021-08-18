function solution(w, h) {
    return w * h - (w + h - gcd(Math.min(w, h), Math.max(w, h)));
}

function gcd(min, max) {
    return min % max == 0 ? max : gcd(max, min % max);
}
