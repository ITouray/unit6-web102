import React from "react";
import { useParams } from "react-router-dom";

const moonPhaseInfo = (e) => {
    if (e === 0) {
        return [
            "🌑",
            "New Moon",
            "The moon is between Earth and the sun, and the side of the moon facing toward us receives no direct sunlight; it is lit only by dim sunlight reflected from Earth.",
        ];
    } else if (e < 0.25) {
        return [
            "🌒",
            "Waxing Crescent",
            "As the moon moves around Earth, the side we can see gradually becomes more illuminated by direct sunlight.",
        ];
    } else if (e === 0.25) {
        return [
            "🌓",
            "First Quarter",
            "When the moon is new, it's most nearly between the Earth and sun for any particular month. It's rising and setting when the sun does and traveling across the sky with the sun during the day. Because it is near the sun its shadowed side points toward Earth, and hence it is invisible, except when it crosses the face of the sun in a solar eclipse.",
        ];
    } else if (e < 0.5) {
        return [
            "🌔",
            "Waxing Gibbous",
            "The area of illumination continues to increase. More than half of the moon's face appears to be getting sunlight.",
        ];
    } else if (e === 0.5) {
        return [
            "🌕",
            "Full Moon",
            "The moon is 180 degrees away from the sun and is as close as it can be to being fully illuminated by the sun from our perspective. The sun, Earth and the moon are aligned, but because the moon's orbit is not exactly in the same plane as Earth's orbit around the sun, they rarely form a perfect line.",
        ];
    } else if (e < 0.75) {
        return [
            "🌖",
            "Waning Gibbous",
            "More than half of the moon's face appears to be getting sunlight, but the amount is decreasing.",
        ];
    } else if (e === 0.75) {
        return [
            "🌗",
            "Third Quarter",
            "The moon has moved another quarter of the way around Earth, to the third quarter position. The sun's light is now shining on the other half of the visible face of the moon.",
        ];
    } else if (e < 1) {
        return [
            "🌘",
            "Waning Crescent",
            "Less than half of the moon's face appears to be getting sunlight, and the amount is decreasing.",
        ];
    } else {
        return [
            "🌑",
            "New Moon",
            "The moon is between Earth and the sun, and the side of the moon facing toward us receives no direct sunlight; it is lit only by dim sunlight reflected from Earth.",
        ];
    }
};

const Detail = ({ data }) => {
    const { datetime } = useParams();
    const day = data.filter((item) => item.datetime === datetime)[0];

    return (
        <div className="App-page">
            <div className="Details">
                {day ? (
                    <div>
                        <h3>Date: {day.datetime}</h3>
                        <h3>
                            Phase:{" "}
                            {moonPhaseInfo(day.moonphase)[0] +
                                "   " +
                                moonPhaseInfo(day.moonphase)[1]}
                        </h3>
                        <h3>Visibility: {day.visibility + "%"}</h3>
                        <h3>Moonrise: {day.moonrise + " PM"}</h3>
                        <h3>Moonset: {day.moonset + " PM"}</h3>
                        <h3>Description: {moonPhaseInfo(day.moonphase)[2]}</h3>
                    </div>
                ) : (
                    <h1>No Data</h1>
                )}
            </div>
        </div>
    );
};

export default Detail;
