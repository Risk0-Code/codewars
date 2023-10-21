fn are_you_playing_banjo(name: &str) -> String {
    return if name.starts_with('r') || name.starts_with("R") {
        [name, " plays banjo"].join("")
    } else {
        [name, " does not play banjo"].join("")
    }
}