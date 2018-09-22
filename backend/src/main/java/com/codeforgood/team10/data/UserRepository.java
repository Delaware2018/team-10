package com.codeforgood.team10.data;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findById(long id);
    User findByPhoneNumber(long phoneNumber);
}
