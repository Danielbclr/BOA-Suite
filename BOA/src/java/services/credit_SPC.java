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
@WebService(serviceName = "credit_SPC")
public class credit_SPC {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "consultaCPF")
    public String consultaCPF(@WebParam(name = "cpf") String cpf) {
        //TODO write your implementation code here:
        return "SPC: O CPF " + cpf + "tem score x";
    }
}
