# Vehicle Rental System with Factory Pattern

## Concept

Create a flexible vehicle rental system that allows users to rent different types of vehicles (e.g., Car, Van, Bike) using a Vehicle Factory.

## Usefulness

- **Flexible Vehicle Management:** Seamlessly introduce, manage, and rent various types of vehicles through a unified interface.
- **Dynamic Pricing Calculation:** Automatically calculate the rental price based on the duration and type of vehicle rented.
- **Simplified Client Usage:** Clients can easily rent different vehicles without being concerned with the underlying creation and management logic.

## Usage

### Renting Vehicles

Renting a vehicle is simplified to a single function call, where the type of vehicle, start time, and either the end time or duration (in hours) are specified:

```typescript
import { rentVehicle, VehicleType } from "./rental";

// Renting vehicles with different end time specifications
rentVehicle(VehicleType.Car, new Date("2023-10-01T10:00:00Z"), 5); // Using duration
rentVehicle(
  VehicleType.Bike,
  new Date("2023-10-01T12:00:00Z"),
  new Date("2023-10-01T14:00:00Z")
); // Using end time
```

### Extending with New Vehicle Types

Introducing new vehicle types into the system involves defining their properties and behaviors in `rental.ts` and extending the `createVehicle` function to support the new type.

## Code Structure

- **`rental.ts`**
  - Contains the core logic for vehicle definition, creation, and rental calculation.
  - `Vehicle`: Interface defining the basic structure of a vehicle.
  - `Rental`: Interface defining the structure of a rental transaction.
  - `createVehicle`: A factory function to create vehicles of specified types.
  - `rentVehicle`: A function to handle the vehicle rental process and pricing calculation.
- **`client.ts`**
  - Demonstrates how to utilize the vehicle rental system to rent various types of vehicles.

## Future Improvements

- **Persistent Storage:** Implement storage solutions to persistently store and manage rental transactions.
- **User Management:** Integrate user management to track and manage rentals per user.
- **Advanced Pricing Models:** Introduce advanced pricing models that consider factors like peak times, user types, and special promotions.

## Contributing

Contributions to enhance the vehicle rental system are welcomed! Feel free to submit issues or pull requests for improvements, enhancements, or bug fixes.
