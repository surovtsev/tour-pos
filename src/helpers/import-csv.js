/**
 * Returns list of tourists with hotel name
 * @param content  csv file content
 */
export const getDenormTourists = (content) => {
  // By lines
  const lines = content.split("\n");
  const tourists = [];
  let accommodation;
  let hotel;
  let ruletka;
  let hotelPickupTime;
  for (let line = 0; line < lines.length; line++) {
    const row = lines[line];
    const cols = row.split(";");
    const isHotel = cols[0] && cols[0].includes("Hotel: ");
    if (isHotel) {
      hotel = cols[0].split("Hotel: ")[1];
      hotelPickupTime = cols[15];
      ruletka = undefined;
      if (hotel.includes("RULETKA")) {
        const ruletkaArr = hotel.split(" - ");
        hotel = ruletkaArr[1];
        ruletka = ruletkaArr[0];
      }
    }
    const isTourist = hotel && !isNaN(Number.parseInt(cols[0], 10));
    if (isTourist) {
      if (cols[1] !== ".") {
        accommodation = cols[1];
      }
      const tourist = {
        hotel,
        ruletka,
        hotelPickupTime,
        reservationId: cols[3],
        checkInDate: cols[6],
        checkOutDate: cols[7],
        flight: cols[8],
        flightTime: cols[9],
        backFlight: cols[10],
        backFlightTime: cols[11],
        name: cols[4],
        accommodation,
        meal: cols[2],
        age: cols[5],
        note: cols[13],
        comment: cols[14],
      };
      tourists.push(tourist);
    }
  }
  return tourists;
};

export const getPrintDepartures = (records) => {
  const hotels = [];
  let hotel;
  let touristNum;
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    if (!hotel || hotel.name !== record.hotel) {
      if (hotel) {
        hotels.push(hotel);
      }
      touristNum = 1;
      hotel = {
        name: record.hotel,
        flight: record.flight,
        date: record.checkOutDate,
        time: record.flightTime,
        hotelPickupTime: record.hotelPickupTime,
        tourists: [],
      };
    }
    hotel.tourists.push({
      num: touristNum,
      name: record.name,
      reservationId: record.reservationId,
      age: record.age,
    });
    touristNum++;
  }
  if (hotel) {
    hotels.push(hotel);
  }
  return hotels;
};
