export enum VehicleType {
  Car = 'car',
  Van = 'van',
  Bike = 'bike',
}

interface Vehicle {
  type: VehicleType;
  pricePerHour: number;
  getRentalPrice: (hours: number) => number;
}

interface Rental {
  vehicle: Vehicle;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
}

const createVehicle = (type: VehicleType, price: number): Vehicle => ({
  type,
  pricePerHour: price,
  getRentalPrice: function (hours: number) {
    return this.pricePerHour * hours;
  },
});

export const createVehicleByType = (vehicle: VehicleType): Vehicle => {
  switch (vehicle) {
    case VehicleType.Car:
      return createVehicle(VehicleType.Car, 50);
    case VehicleType.Van:
      return createVehicle(VehicleType.Van, 80);
    case VehicleType.Bike:
      return createVehicle(VehicleType.Bike, 20);
    default:
      throw new Error('Invalid vehicle type');
  }
};

export const rentVehicle = (type: VehicleType, startTime: Date, endTime: Date | number): Rental => {
  const vehicle = createVehicleByType(type);

  // Calculate the actual end time and duration in hours
  let actualEndTime: Date;
  let durationHours: number;
  if (typeof endTime === 'number') {
    durationHours = endTime;
    actualEndTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);
  } else {
    durationHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
    actualEndTime = endTime;
  }

  const price = vehicle.getRentalPrice(durationHours);

  console.log(
    `Rented a ${
      vehicle.type
    } from ${startTime.toISOString()} to ${actualEndTime.toISOString()}. Total rental price: $${price}.`
  );

  return {
    vehicle,
    startTime,
    endTime: actualEndTime,
    totalPrice: price,
  };
};
