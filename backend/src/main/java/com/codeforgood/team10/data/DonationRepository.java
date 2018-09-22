package com.codeforgood.team10.data;

import org.springframework.data.repository.CrudRepository;
import java.util.ArrayList;

public interface DonationRepository extends CrudRepository<Donation, Long> {
    ArrayList<Donation> findAllById(long id);
}
