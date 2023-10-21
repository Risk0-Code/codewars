fn get_age(age: &str) -> u32 {
    let age_exact:char = age.chars().next().unwrap();
    let age_to_u32:u32 = age_exact;
    return age_to_u32::from_str_to_radix()
}