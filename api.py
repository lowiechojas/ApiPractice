import requests

# AIzaSyAt1RtlPmF_HH5sOZOFVYV_E62N-M9qJlg
apikey = 'AIzaSyAt1RtlPmF_HH5sOZOFVYV_E62N-M9qJlg'
# path = "https://routes.googleapis.com/directions/v2:computeRoutes"
path = 'https://maps.googleapis.com/maps/api/directions/json'

# create a file to store the route
# RouteFile = open('GoogleRoute.txt', "x")
# destination: 14.268983507310306, 120.87965610150337
# start: 14.260713436834758, 120.91989576558205
_route = requests.get(path, params={
    "origin": "14.260713436834758, 120.91989576558205",
    "destination": "14.268983507310306, 120.87965610150337",
    "key": apikey,
    "travelMode": "DRIVE", }
).json()


def GoogleRouteApi():
    # directions = _route.json()
    # print the route
    r = []
    if _route['geocoded_waypoints'][0]['geocoder_status'][0:] == 'OK':
        for step in _route['routes'][0]['legs'][0]['steps']:
            r.append(step['html_instructions'])
            # print(r)
        return r

    else:
        print("Route not found")
# RouteFile.write(str(_route))
# RouteFile.close()
# print the route


if __name__ == "__main__":
    # This code only runs if you execute api.py directly
    test = GoogleRouteApi()
