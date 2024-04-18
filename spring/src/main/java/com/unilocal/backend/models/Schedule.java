package com.unilocal.backend.models;

import java.time.LocalTime;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Schedule {
  @Id private String id;

  @NonNull private String day;
  @NonNull private LocalTime start_hour;
  @NonNull private LocalTime end_hour;
}
