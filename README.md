<h1 align="center">🚀 RentalX 🚀</h1>

<p align="center">
Car rental application developed during <a href="https://www.rocketseat.com.br/ignite">Rocketseat's Ignite</a> Node.js bootcamp.
</p>

# 

## Application Requirements

> **FR**: Functional Requirements  
> **NFR**: Non-functional Requirements  
> **BR**: Business Rules


### Car Registration

**FR**
- [x] Must be able to register a new car.

**BR**
- [x] Only an admin user should be able to register a car.
- [x] Should not be able to register a new car with an existing license plate.
- [x] The car must be registered as available by default.

#

### Car Listing

**FR**
- [ ] Must be able to list all available cars.
- [ ] Must be able to list all available cars by category.
- [ ] Must be able to list all available cars by brand.
- [ ] Must be a ble to list all available cars by name.

**BR**
- [ ] The user does not need to be authenticated.

#

### Car Specification Registration

**RF**
- [ ] Must be able to register a car specification.
- [ ] Must be able to list all specifications.
- [ ] Must be able to list all cars.

**BR**
- [ ] Only an admin user should be able to register a specification.
- [ ] Should not be able to register a specification to a non-registered car.
- [ ] Should not be able to register one specification to the same car more than once.

#

### Car Images Registration

**RF**
- [ ] Must be able to register a image of the car.
- [ ] Must be able to list all cars.

**NFR**
- [ ] Use multer to upload images.

**BR**
- [ ] Only an admin user should be able to register a car image.
- [ ] User must be able to register more than one image of the same car.

#

### Car Rental

**RF**
- [ ] Must be able to register a car rental.

**BR**
- [ ] A rental must have minimum duration of 24 hours.
- [ ] Should not be able to register a new rental if one is already open for the same user.
- [ ] Should not be able to register a new rental if one is already open for the same car.