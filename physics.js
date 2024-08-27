function getAcceleration(properties) {
    const { f, m, Δv, Δt, d, t } = properties;

    // first formula a = F/m
    if (f !== undefined && m !== undefined) {
        if (m === 0) {
            return "impossible";
        }
        return f / m;
    }

    // second formula a = Δv/Δt
    if (Δv !== undefined && Δt !== undefined) {
        if (Δt === 0) {
            return "impossible";
        }
        return Δv / Δt;
    }

    // third formula a = 2d/t^2
    if (d !== undefined && t !== undefined) {
        if (t === 0) {
            return "impossible";
        }
        return (2 * d) / (t * t);
    }
    return "impossible";
}
