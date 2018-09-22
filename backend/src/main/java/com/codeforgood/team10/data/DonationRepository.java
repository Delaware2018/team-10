package com.codeforgood.team10.data;

import org.springframework.data.repository.CrudRepository;
import java.util.ArrayList;
import java.util.List;

public interface DonationRepository extends CrudRepository<Donation, Long> {
    List<Donation> findAllById(long id);
    List<Donation> findAllByPhoneNumber (long phoneNumber);

}
