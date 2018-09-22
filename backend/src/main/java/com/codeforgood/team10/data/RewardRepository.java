package com.codeforgood.team10.data;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RewardRepository extends CrudRepository<Reward, Long> {
    List<Reward> findAll();
}
