"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
/**
 * Generate a suitably random value to be used as an attestation or assertion challenge
 */
function generateChallenge() {
    /**
     * WebAuthn spec says that 16 bytes is a good minimum:
     *
     * "In order to prevent replay attacks, the challenges MUST contain enough entropy to make
     * guessing them infeasible. Challenges SHOULD therefore be at least 16 bytes long."
     *
     * Just in case, let's double it
     */
    return crypto_1.default.randomBytes(32);
}
exports.default = generateChallenge;
//# sourceMappingURL=generateChallenge.js.map