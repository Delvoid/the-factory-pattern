import { rentVehicle, VehicleType } from './rental';

// Renting vehicles with different end time specifications
rentVehicle(VehicleType.Car, new Date('2023-10-01T10:00:00Z'), 5); // Specify duration in hours
rentVehicle(VehicleType.Bike, new Date('2023-10-01T12:00:00Z'), new Date('2023-10-01T14:00:00Z')); // Specify end time
