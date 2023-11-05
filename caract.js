export function caractSign(signo) {
    const signos = {
        'Aries': {
            positivas: "Puts themselves first but doesn't forget those around them! Motivates people and is helpful, as well as persevering and passionate.",
            negativas: "Their restlessness makes Arians typically restless, impulsive, or thoughtless. Because they think too much about themselves, they are sometimes labeled as selfish."
        },
        'Taurus': {
            positivas: "Cautious with everything and everyone, patient, and productive. These are people you can trust, and they tend to be very loyal.",
            negativas: "Stubbornness is a natural characteristic of a Taurean. As they are very persistent and stubborn, they want to take care of everything and can appear controlling, inflexible, and materialistic."
        },
        'Gemini': {
            positivas: "Energetic and communicative, they have an open mind and are very clever.",
            negativas: "They can oscillate a lot, becoming indecisive, inconsistent, anxious, and evasive at the same time.",
        },
        'Cancer': {
            positivas: "They are dedicated and kind, always listening to or taking care of someone because they understand their emotions and problems.",
            negativas: "Neediness and bad moods can arise at any time in Cancers, who can become jealous or victimize themselves.",
        },
        'Leo': {
            positivas: "Intelligent and courageous, they are natural leaders. They are also expressive and determined: when they set their minds on something, you can be sure they will go all the way to achieve it.",
            negativas: "They have a very strong personality, which can make them become too ambitious, bossy, or overly convinced of themselves.",
        },
        'Virgo': {
            positivas: "Observation and efficiency are the marks of a Virgo, who is very attentive and sincere with others and is always solving a problem, whether it's their own or someone else's.",
            negativas: "Being systematic makes Virgos very critical and suspicious. It can also make them anxious and too perfectionist.",
        },
        'Libra': {
            positivas: "Extremely diplomatic, they are sincere and seek to always balance things to achieve the best results. They rely on their friendliness, good communication, and tranquility.",
            negativas: "Seeking balance all the time makes Librans indecisive, controlling, and very organized. They also have difficulty saying no in some situations.",
        },
        'Scorpio': {
            positivas: "With enviable self-confidence (except for Leos... lol), they have a lot of intuition and a wonderful protective instinct. They are dedicated and passionate.",
            negativas: "Their good memory, jealousy, and sometimes obsession make them never forget what others have done to them, making them vengeful and resentful.",
        },
        'Sagittarius': {
            positivas: "They are talented, intelligent, and fair. They are stimulating people who like to have fun and have a lot of spontaneity and vitality.",
            negativas: "They may appear arrogant because they know too much, they are strict with themselves and others, a little impatient, and sarcastic.",
        },
        'Capricorn': {
            positivas: "They are persistent and determined. Their innate organization and ambition make them very efficient and hardworking.",
            negativas: "Being too straight-laced can make Capricorns become too rigid and proud. Since they are very practical, they can also become cold and pessimistic.",
        },
        'Aquarius': {
            positivas: "Idealistic and inventive, Aquarians tend to be calm and fair while also enjoying making changes and not settling in situations.",
            negativas: "Being individualistic and detached, many consider Aquarians to be cold and heartless (lol), as well as distant, rebellious, and unpredictable.",
        },
        'Pisces': {
            positivas: "They are natural listeners, reliable, intuitive, helpful, and concerned about others. They are adaptable and friendly, making them very sociable.",
            negativas: "Their heightened sensitivity can make them too emotional, prone to depression, very temperamental, and resentful. They are flighty, escaping from reality, and because they trust others too much, they tend to be indecisive and innocent.",
        },
    };

    if (signos[signo]) {
        const caracteristicas = signos[signo];
        return `Positive characteristics of ${signo}: ${caracteristicas.positivas}<br><br>Negative characteristics of ${signo}: ${caracteristicas.negativas}`;
    } else {
        return "Sign not found";
    }
}

export function caractElem(elemento) {
    const elementos = {
        'Fire': {
            descricao: "Fire signs are Aries, Leo, and Sagittarius. This element represents both action, liveliness, and overcoming, as well as the volatility, irritability, and pride typical of what is consumed quickly."
        },
        'Earth': {
            descricao: "Earth signs are Taurus, Virgo, and Capricorn. Earth symbolizes what is concrete and stable, with the counterpoint of resistance, stubbornness, and rigidity of those firmly rooted in the ground."
        },
        'Air': {
            descricao: "Air signs are Gemini, Libra, and Aquarius. Air brings forth reason, ideas, and exchanges, but also the dispersion and the rebellion of those who cannot be 'imprisoned.'"
        },
        'Water': {
            descricao: "Water signs are Cancer, Scorpio, and Pisces. Water represents what is mysterious and changeable, as well as the vulnerability of those who are transient, like water currents."
        }
    };

    if (elementos[elemento]) {
        return elementos[elemento].descricao;
    } else {
        return "Element not found";
    }
}
