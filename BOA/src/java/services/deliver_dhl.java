/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author he4dless
 */
@WebService(serviceName = "deliver_dhl")
public class deliver_dhl {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
    
    @WebMethod(operationName = "prePostar")
    public String prePostar(@WebParam(name = "codigo") String codigo) {
        //TODO write your implementation code here:
        return "A encomenda com o código " + codigo + "foi pre-postada";
    }
}
