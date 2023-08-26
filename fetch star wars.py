import requests

def fetch_homeworld_info(character_name):
    # Make a request to get information about the character
    response = requests.get(f"https://swapi.dev/api/people/?search={character_name}")
    character_data = response.json()["results"][0]

    # Get the character's homeworld URL
    homeworld_url = character_data["homeworld"]

    # Make a request to get information about the homeworld
    homeworld_response = requests.get(homeworld_url)
    homeworld_data = homeworld_response.json()

    # Extract relevant information
    homeworld_info = {
        "Name": homeworld_data["name"],
        "Terrain": homeworld_data["terrain"],
        "Climate": homeworld_data["climate"],
        "Residents": len(homeworld_data["residents"])
    }

    return homeworld_info

# Example usage
character_name = "Luke Skywalker"
homeworld_info = fetch_homeworld_info(character_name)

# Display the information
print(f"Homeworld Information for {character_name}:")
print(f"Name: {homeworld_info['Name']}")
print(f"Terrain: {homeworld_info['Terrain']}")
print(f"Climate: {homeworld_info['Climate']}")
print(f"Residents: {homeworld_info['Residents']}")
