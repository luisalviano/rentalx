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
- [x] Must be able to list all available cars.
- [x] Must be able to list all available cars by category.
- [x] Must be able to list all available cars by brand.
- [x] Must be able to list all available cars by name.

**BR**
- [x] The user does not need to be authenticated.

#

### Car Specification Registration

**FR**
- [x] Must be able to register a car specification.

**BR**
- [x] Only an admin user should be able to register a specification.
- [x] Should not be able to register a specification to a non-registered car.
- [x] Should not be able to register one specification to the same car more than once.

#

### Car Images Registration

**FR**
- [x] Must be able to register a image of the car.

**NFR**
- [x] Use multer to upload images.

**BR**
- [x] Only an admin user should be able to register a car image.
- [x] User must be able to register more than one image of the same car.

#

### Car Rental

**FR**
- [x] Must be able to register a car rental.

**BR**
- [x] A rental must have minimum duration of 24 hours.
- [x] Should not be able to register a new rental if one is already open for the same user.
- [x] Should not be able to register a new rental if one is already open for the same car.
- [x] User must be authenticated.
- [x] When rented, the car's status must be changed to unavailable.

#

### Car Return

**FR**
- [ ] Must be possible to return a car.

**BR**
- [ ] If the car is returned in less than 24 hours, the full daily rate must be charged.
- [ ] When the car is returned, the car must be set as available for another rental.
- [ ] When the car is returned, the user must be able to make another rental.
- [ ] When the car is returned, the total rent must be calculated.
- [ ] If the return time is longer than the expected return time, a fine must be charged. This fine should be proportional to the delayed time.
- [ ] In case there is a fine, it should be added to the total rent.
- [ ] User must be authenticated.