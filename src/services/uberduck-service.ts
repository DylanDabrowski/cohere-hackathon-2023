// TODO add description

export const tts = (singer: string, verse: string) => {
    return enqueueJob("", "");
};

const enqueueJob = async (model: string, verse: string) => {
    const result = await fetch("https://api.uberduck.ai/speak", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Basic " +
                btoa(
                    "pub_ovqtwdijqfnnfsxzze:pk_ce7abd6f-ef38-401e-baab-757e08aac040"
                ),
        },
        body: '{"speech":"This is just a test.","voice":"eminem"}',
    });

    return result;
};
