export const getDistanceBetweenTwoLocations = ({ mainLocation, targetedLocation }: { mainLocation: string, targetedLocation: string }) => {
  let lat1 = Number(mainLocation.split(',', 1)[0])
  let lon1 = Number(mainLocation.split(',')[1])
  let lat2 = Number(targetedLocation.split(',', 1)[0])
  let lon2 = Number(targetedLocation.split(',')[1])
  lat1 *= Math.PI / 180;
  lon1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  lon2 *= Math.PI / 180;
  var lonDelta = lon2 - lon1;
  var a = Math.pow(Math.cos(lat2) * Math.sin(lonDelta), 2) + Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDelta), 2);
  var b = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonDelta);
  var angle = Math.atan2(Math.sqrt(a), b);
  return angle * 6371.009;
}