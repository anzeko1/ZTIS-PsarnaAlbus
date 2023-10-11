package org.acme;

import io.quarkus.test.common.http.TestHTTPEndpoint;
import io.quarkus.test.common.http.TestHTTPResource;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.acme.dateReservation.Reservation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.hamcrest.CoreMatchers.hasItems;

import java.io.IOException;
import java.net.URL;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GreetingResourceTest {

    @TestHTTPEndpoint(GreetingResource.class)
    @TestHTTPResource
    URL url;
    @Test
    public void test() throws IOException {
        given()
                .when().get("/reservationDate/all")
                .then()
                .statusCode(200);
    }

    @Test
    public void testPost() throws IOException {

    }


}
