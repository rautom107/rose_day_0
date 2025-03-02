// Rose Drawing Animation
const canvas = document.getElementById('roseCanvas');
const ctx = canvas.getContext('2d');

with (Math) {
    C = cos, S = sin, P = pow;
}

let O = ctx.getImageData(0, 0, canvas.height = f = W = 256, f);
let U = O.data;
let D = {};
let F = [];

function J(p) {
    p[5] = Q = 0;
    for (let j = 3; j--;) {
        if (!D[Q = (p[j] >>= 2) + Q * f]) D[Q] = F.push(p);
    }
}

setInterval(function () {
    for (let i = 1e3; i--;) {
        c = i % 42 * 1.35;
        H = T;
        T = Math.random();
        A = H * 2 - 1;
        B = T * 2 - 1;
        J([S(H * 7) * (o = 13 + 5 / (.2 + P(T * 4, 4))) - T * 50, T * 550 + 500, (l = C(H * 7)) * o, (G = l / 7 + .5) - T / 4, G]);
        if (A * A + B * B < 1) {
            if (c > 32) {
                J([(o = .5 / (H + .01) - H * 300) * C(n = (j = c & 1) ? 6 : 4) + (w = T * -f) * S(n) + j * 630 - 390, o * S(n) - w * C(n) + 999 - j * 350, C(B + A) * 99 - j * 50, (P(l = 1 - B * B, f * 6) + C(H + T) + P(C((o * H + o + (B > 0 ? w : -w)) / 25), 30) * l - H + 2) / 5, o / 1e3 + .7 - o * w / 3e5]);
                J([(o = H * 45 - 20) * C(l = c / .86) + (w = T * T) * f * S(l), C(B / 2) * 99 - w * T * 60 + 436, o * S(l) - w * f * C(l), w * .3 + .3, T * .7]);
            } else {
                J([(o = A * (2 - T) * (80 - c * 2)) * C(c) - (w = 99 - C(A) * 120 - C(T) * (f - c * 5) + C(P(1 - T, 7)) * 50 + c * 2) * S(c), (B * 2 - C(P(T, 7)) + 9) * 50, o * S(c) + w * C(c), 1 - T * .7, P(1 - T, 9) / 4]);
            }
        }
    }
    for (let i = 0; i < f * f; Math[i++] = f) {
        for (let l = 4; l--;) U[i * 4 + l] = 255;
    }
    for (c = C(W), s = S(W), j = F.length; j--;) {
        k = F[j], x = k[0] * c + k[2] * s + 99, z = k[0] * s - k[2] * c, y = k[1] - z * .4 << 8;
        for (let i = 3; i--;) {
            if (z < Math[p = y - ~x + [0, 1, f][i]]) {
                for (Math[p] = z, l = 3; l--;) U[p * 4 + l] = k[l + 3] * f;
            }
        }
    }
    ctx.putImageData(O, 0, 0);
    W += .03;
}, T = 0);

// Create Button Functionality
const createButton = document.getElementById('create-button');
const messageContainer = document.getElementById('message-container');

createButton.addEventListener('click', function () {
    messageContainer.innerHTML = '<p>🌹 Happy Rose Day, my love! 🌹 Just like a rose fills the world with its beauty and fragrance, you fill my life with love and happiness.You are the most precious flower in my garden of life, and I promise to cherish you forever. ❤️💐Love you endlessly! 💕✨.</p > ';
    createButton.style.display = 'none';
});