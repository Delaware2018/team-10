package com.codeforgood.team10.data;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findById(long id);
    User findByPhoneNumber(long phoneNumber);
    List<User> findAll();
}
